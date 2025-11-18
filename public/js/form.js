/** ✅ Admission Enquiry API Call (axios) */
export const admissionEnquiryRequest = async (data) => {
  try {
    const config = {
      method: "post",
      url: process.env.ADMISSION_URL,
      headers: {
        "x-api-key": process.env.API_KEY,
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

/** Contact Enquiry Request */
export const contactEnquiryRequest = async (data) => {
  try {
    const config = {
      method: "post",
      url: process.env.API_URL,
      headers: {
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

/** Subscribe Newsletter */
export const subcribeNewsLetterRequest = async (data) => {
  try {
    const config = {
      method: "post",
      url: process.env.API_URL,
      headers: {
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
