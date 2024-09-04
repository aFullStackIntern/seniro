// import { Button as MuiButton } from "@mui/material";
// import { styled } from "@mui/system";

// const StateButton = styled(MuiButton)({
//   color: "white",
//   backgroundColor: "#F15B25",
//   paddingLeft: 5,
//   paddingRight: 5,
//   borderRadius: 0,
//   textTransform: "none",

//   "&:hover": {
//     backgroundColor: "white",
//     color: "black",
//   },
// });

// export default StateButton;

import { Button as MuiButton, Stack } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

const StateButton = styled(MuiButton)({
  color: "black",
  backgroundColor: "white",
  paddingLeft: 5,
  paddingRight: 5,
  borderRadius: 84,
  padding: "8px 21px 8px 12px",
  textTransform: "none",
  fontSize: "12px",
  width: "270px",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
});

const ButtonWithImage = ({ children, iconPosition, imageUrl, ...props }) => {
  return (
    <StateButton {...props}>
      {iconPosition === "start" && imageUrl && (
        <Image
          src={imageUrl}
          alt="start icon"
          style={{ marginRight: 19, width: "32px", height: "31px" }}
        />
      )}
      {children}
      {iconPosition === "end" && imageUrl && (
        <Image src={imageUrl} alt="end icon" style={{ marginLeft: 8 }} />
      )}
    </StateButton>
  );
};

export default ButtonWithImage;
