/**
 * WhatsApp Integration Utilities
 * Handles WhatsApp message generation and redirect flows
 */

export interface WhatsAppBookingData {
  name: string;
  treatment: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
}

/**
 * Message templates for different contact scenarios
 */
export const whatsappMessages = {
  // General inquiry
  general: "Hi Nikunj Wash Care, I want to know more about your appliance repair services.",
  
  // Service-specific
  treatments: {
    "washing-machine": "Hi Nikunj Wash Care, I need repair service for my washing machine.",
    microwave: "Hi Nikunj Wash Care, I need repair service for my microwave.",
    "wm-troubleshooting": "Hi Nikunj Wash Care, my washing machine has an issue and needs troubleshooting.",
    "mw-troubleshooting": "Hi Nikunj Wash Care, my microwave is not working properly and needs repair.",
    maintenance: "Hi Nikunj Wash Care, I want to schedule appliance maintenance.",
    "doorstep-service": "Hi Nikunj Wash Care, I would like to book a doorstep inspection.",
    "diagnosis-inspection": "Hi Nikunj Wash Care, I want to book a doorstep diagnosis.",
    "genuine-parts": "Hi Nikunj Wash Care, I need genuine spare parts and service for my appliance.",
  },
  
  // FAQ inquiry
  faq: "Hi Nikunj Wash Care, I have a question about your repair services.",
  
  // Post-booking
  booking: "Hi Nikunj Wash Care, I just submitted a repair booking request.",
};

/**
 * Create WhatsApp link with message
 */
export const createWhatsAppLink = (
  phone: string,
  message: string
): string => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

/**
 * Get message for specific treatment
 */
export const getTreatmentMessage = (treatmentId: string): string => {
  return (
    whatsappMessages.treatments[treatmentId as keyof typeof whatsappMessages.treatments] ||
    whatsappMessages.general
  );
};

/**
 * Generate WhatsApp message from booking data
 */
export const generateWhatsAppMessage = (data: WhatsAppBookingData): string => {
  let message = `Hi Nikunj Wash Care, I would like to book an appliance repair service.\n\n`;
  
  message += `📋 *Details:*\n`;
  message += `Name: ${data.name}\n`;
  message += `Service: ${data.treatment}\n`;
  
  if (data.preferredDate) {
    message += `Preferred Date: ${data.preferredDate}\n`;
  }
  
  if (data.preferredTime) {
    message += `Preferred Time: ${data.preferredTime}\n`;
  }
  
  if (data.message) {
    message += `\nAddress / Issue Details:\n${data.message}\n`;
  }
  
  message += `\nThank you!`;
  
  return message;
};

/**
 * Redirect to WhatsApp with pre-filled message
 */
export const redirectToWhatsApp = (
  phoneNumber: string,
  message: string
): void => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, "_blank");
};

/**
 * Format phone number to WhatsApp format (country code + number, no symbols)
 */
export const formatPhoneForWhatsApp = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, "");
  
  // If standard 10-digit mobile number, prepend Indian country code 91
  if (cleaned.length === 10) {
    return "91" + cleaned;
  }
  
  return cleaned;
};

/**
 * Validate phone number
 */
export const isValidPhone = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, "");
  return cleaned.length >= 10;
};

