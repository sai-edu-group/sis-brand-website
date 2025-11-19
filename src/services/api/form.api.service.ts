import axios from "axios";
import type { AxiosRequestConfig } from "axios";

/** ✅ Admission Enquiry API Call (axios) */
export const admissionEnquiryRequest = async (data: any) => {
  try {
    const config: AxiosRequestConfig = {
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
  } catch (error: any) {
    console.error("❌ API error:", error);
    return { status: false, message: error.message };
  }
};

/** Contact Enquiry Request */
export const contactEnquiryRequest = async (data: any) => {
  try {
    const config: AxiosRequestConfig = {
      method: "post",
      url: process.env.API_URL,
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
