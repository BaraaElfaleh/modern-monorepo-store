export const useAddressValidation = () => {
  const validateAddress = (address: any) => {
    const errors: Record<string, string> = {};
    if (!address.fullName) errors.fullName = "Name is required";
    if (address.address.length < 10) errors.address = "Address is too short";
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };

  return { validateAddress };
};