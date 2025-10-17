/** Admission Enquiry API Call (axios) */
export const admissionEnquiryRequest = async (data) => {
  try {
    const config = {
      method: "post",
      url: "https://sis.simplyadmission.com/",
      headers: { "Content-Type": "application/json" },
      data,
    };

    // Make API Call
    const response = await axios.request(config);
    return response.data;

    // Error Handling
  } catch (error) {
    error.response.data.status = false;
    return error.response;
  }
};
