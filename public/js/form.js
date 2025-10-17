// ✅ Admission Enquiry API Call (axios)
export const admissionEnquiryRequest = async (data) => {
  try {
    const config = {
      method: "post",
      url: "https://sis.simplyadmission.com/",
      headers: {
        "x-api-key": "aAKb2GZ4O5O69NZ6SxFe9BrA69z1RhQy5hULNcpSt8QiStzY83",
        "Content-Type": "application/json",
      },
      data,
    };

    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error("❌ API error:", error);
    return { status: false, message: error.message };
  }
};

export const contactEnquiryRequest = async (data) => {
  try {
    const config = {
      method: "post",
      url: "https://sis.simplyadmission.com/",
      headers: {
        "x-api-key": "aAKb2GZ4O5O69NZ6SxFe9BrA69z1RhQy5hULNcpSt8QiStzY83",
        "Content-Type": "application/json",
      },
      data,
    };

    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error("❌ API error:", error);
    return { status: false, message: error.message };
  }
};
