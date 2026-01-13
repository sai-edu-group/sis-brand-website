<?php
/**
 * -------------------------------
 * CONFIG: Paths to IGNORE
 * -------------------------------
 * Any request starting with these paths
 * will be served by THIS server.
 */
$ignoredPaths = [
    '/saimun',
    '/set',
];

// Requested path
$path = '/' . ltrim($_GET['path'] ?? '', '/');

// 🔴 Check if path should be ignored
foreach ($ignoredPaths as $ignored) {
    if (strpos($path, $ignored) === 0) {
        // Let Apache / cPanel handle it normally
        return;
    }
}

// Preserve original query string
$query = $_SERVER['QUERY_STRING'] ?? '';

// Build target URL
$vercelBase = 'https://uat.saicloudschool.in/';
$targetUrl = rtrim($vercelBase, '/') . $path;

if (!empty($query)) {
    $targetUrl .= '?' . $query;
}

// Init cURL
$ch = curl_init($targetUrl);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HEADER => true,
]);

$response = curl_exec($ch);
$headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);

$headers = substr($response, 0, $headerSize);
$body = substr($response, $headerSize);

// Forward essential headers
foreach (explode("\r\n", $headers) as $header) {
    if (
        stripos($header, 'Content-Type:') === 0 ||
        stripos($header, 'Cache-Control:') === 0
    ) {
        header($header);
    }
}

// Output proxied content
echo $body;

curl_close($ch);