import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Stack, Typography } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { usePathname } from "next/navigation";

const PhoneNumberInput = ({ formData, setFormData, errors }) => {
  const pathname = usePathname();
  const handlePhoneChange = (value, country) => {
    setFormData((prev) => ({
      ...prev,
      PhoneCode: country.dialCode,
      PhoneNumber: value, // Store the full number with the dial code
    }));
  };
  const isContactUsPage = pathname.endsWith("/Contact-us");
  return (
    <Stack
      style={{ position: "relative" }}
      sx={{
        width: {
          xs: "220px",
          sm: "300px",
          md: "480px",
          lg: "385px",
          xl: "480px",
        },
        height: { xs: "45px", sm: "55px", md: "67px", lg: "57px", xl: "67px" },
      }}
      margin={"0 auto"}
    >
      <PhoneInput
        country={""} // Default country code for India
        value={formData.PhoneNumber}
        onChange={handlePhoneChange}
        inputProps={{
          name: "phoneNumber",
          id: "phoneInput",
        }}
      />
      {errors.PhoneNumber && (
        <Typography color="error">{errors.PhoneNumber}</Typography>
      )}
      {!isContactUsPage && (
        <PhoneAndroidIcon
          style={{
            position: "absolute",
            top: "50%",
            right: "8px",
            transform: "translateY(-50%)",
            color: "#AAAAAA",
            fontSize: "40px",
          }}
        />
      )}
    </Stack>
  );
};

export default PhoneNumberInput;
