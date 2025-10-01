import axios from "axios";
import type { AxiosRequestConfig } from "axios";

/** Admission Enquiry API Call (axios) */
export const admissionEnquiryRequest = async (data: any) => {
  try {
    const config: AxiosRequestConfig = {
      method: "post",
      url: "/api/enquiry/admission",
      headers: { "Content-Type": "application/json" },
      data,
    };

    // Make API Call
    const response = await axios.request(config);
    return response.data;

    // Error Handling
  } catch (error: any) {
    error.response.data.status = false;
    return error.response;
  }
};
