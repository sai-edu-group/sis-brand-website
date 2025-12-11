// MODULES //
import axios from "axios";
import type { AxiosRequestConfig } from "axios";

/** ✅ LeadSquared Lead Capture API Call */
export const admissionEnquiryRequest = async (leadData: any) => {
  try {
    // Construct LeadSquared URL with keys
    const url = `/api/admission`;

    const config: AxiosRequestConfig = {
      method: "post",
      url,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(leadData), // must be array of { Attribute, Value }
    };

    const response = await axios.request(config);

    return response.data;
  } catch (error: any) {
    console.error("❌ LeadSquared API Error:", error.response?.data || error);
    return { status: false, message: error.message };
  }
};

/** Contact Enquiry Request */
export const contactEnquiryRequest = async (data: any) => {
  try {
    const config: AxiosRequestConfig = {
      method: "post",
      url: "https://sis-api.neevohub.com/contacts/",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };

    const response = await axios.request(config);
    return response.data;
  } catch (error: any) {
    console.error("❌ API error:", error);
    return { status: false, message: error.message };
  }
};

/** Subscribe Newsletter */
export const subcribeNewsLetterRequest = async (data: any) => {
  try {
    const config: AxiosRequestConfig = {
      method: "post",
      url: process.env.API_URL,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };
    console.log(data);

    const response = await axios.request(config);
    return response.data;
  } catch (error: any) {
    console.error("❌ API error:", error);
    return { status: false, message: error.message };
  }
};
