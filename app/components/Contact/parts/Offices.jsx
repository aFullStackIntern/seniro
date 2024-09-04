import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import indiaFlag from "../../assets/indiaflag.svg";
import USAflag from "../../assets/USAflag.svg";
import Image from "next/image";
const Offices = () => {
  const lists = [
    {
      state: "Chennai",
      address:
        "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
      phone1: "044 - 69656070",
      phone2: "044 - 69656070",
      Fax: "044 67447172",
    },
    {
      state: "Bihar",
      address:
        "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
      phone1: "044 - 69656070",
      phone2: "044 - 69656070",
      Fax: "044 67447172",
    },
    {
      state: "Jaipur",
      address:
        "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
      phone1: "044 - 69656070",
      phone2: "044 - 69656070",
      Fax: "044 67447172",
    },
    {
      state: "Delhi",
      address:
        "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
      phone1: "044 - 69656070",
      phone2: "044 - 69656070",
      Fax: "044 67447172",
    },
    {
      state: "Mumbai",
      address:
        "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
      phone1: "044 - 69656070",
      phone2: "044 - 69656070",
      Fax: "044 67447172",
    },
    {
      state: "Bangalore",
      address:
        "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
      phone1: "044 - 69656070",
      phone2: "044 - 69656070",
      Fax: "044 67447172",
    },
  ];
  const list2 = [
    {
      state: "New York",
      address:
        "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
      phone1: "044 - 69656070",
      phone2: "044 - 69656070",
      Fax: "044 67447172",
    },
    {
      state: "Alaska",
      address:
        "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
      phone1: "044 - 69656070",
      phone2: "044 - 69656070",
      Fax: "044 67447172",
    },
    {
      state: "Maryland",
      address:
        "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
      phone1: "044 - 69656070",
      phone2: "044 - 69656070",
      Fax: "044 67447172",
    },
    {
      state: "New jersey",
      address:
        "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
      phone1: "044 - 69656070",
      phone2: "044 - 69656070",
      Fax: "044 67447172",
    },
    {
      state: "Texas",
      address:
        "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
      phone1: "044 - 69656070",
      phone2: "044 - 69656070",
      Fax: "044 67447172",
    },
    {
      state: "Florida",
      address:
        "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
      phone1: "044 - 69656070",
      phone2: "044 - 69656070",
      Fax: "044 67447172",
    },
  ];
  return (
    <Stack bgcolor={"#F6F8FF"} pt={5}>
      <Stack alignItems={"center"} gap={1}>
        <Typography
          fontSize={{
            xs: "20px",
            sm: "26px",
            md: "30px",
            lg: "35px",
          }}
          textAlign={"center"}
        >
          Our offices around the world
        </Typography>
        <Typography textAlign={"center"}>
          Connect with one of our global offices... <br /> or feel free to just
          send us a nifty postcard. We won't mind!
        </Typography>
      </Stack>
      <Stack alignItems={"Center"} pt={6}>
        <Stack bgcolor={"white"} width={"95%"}>
          <Stack direction={"row"} gap={2} justifyContent={"center"} pt={4}>
            <Stack justifyContent={"center"}>
              <Image
                src={indiaFlag}
                alt=""
                style={{ width: "51px", height: "35px" }}
              />
            </Stack>
            <Typography fontSize={"35px"}>India</Typography>
          </Stack>
          <Stack
            direction={{
              xs: "column",
              md: "row",
              lg: "row",
            }}
            flexWrap={"wrap"}
            justifyContent={"center"}
            rowGap={6}
            columnGap={2}
            p={{
              xs: "30px 0px",
              md: "30px 0px",
              lg: "30px 0px",
            }}
          >
            {lists.map((d) => (
              <Stack
                width={{
                  xs: "95%",
                  sm: "80%",
                  md: "23%",
                }}
                gap={1}
                p={{
                  xs: "0",
                  sm: "0",
                  md: "0 20px",
                }}
                margin={"0 auto"}
              >
                <Typography fontWeight={"bold"} fontSize={"25px"}>
                  {d.state}
                </Typography>
                <Typography>{d.address}</Typography>
                <Stack direction={"row"} gap={1}>
                  <Typography fontWeight={"bold"}>Phone:</Typography>
                  <Box>
                    <Typography>{d.phone1}</Typography>
                    <Typography>{d.phone2}</Typography>
                  </Box>
                </Stack>
                <Stack direction={"row"} gap={3.7}>
                  <Typography fontWeight={"bold"}>Fax:</Typography>
                  <Box>
                    <Typography>{d.Fax}</Typography>
                  </Box>
                </Stack>
                <hr
                  style={{
                    marginTop: "30px",
                    width: "95%",
                    color: "black",
                    height: "1px",
                  }}
                />
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
      <Stack alignItems={"Center"} pt={6} pb={10}>
        <Stack bgcolor={"white"} width={"95%"} pb={2}>
          <Stack direction={"row"} gap={2} justifyContent={"center"} pt={4}>
            <Stack justifyContent={"center"}>
              <Image
                src={USAflag}
                alt=""
                style={{ width: "51px", height: "35px" }}
              />
            </Stack>
            <Typography fontSize={"35px"}>USA</Typography>
          </Stack>
          <Stack
            direction={{
              xs: "column",
              md: "row",
              lg: "row",
            }}
            flexWrap={"wrap"}
            justifyContent={"center"}
            rowGap={6}
            columnGap={2}
            p={{
              xs: "30px 0px",
              md: "30px 0px",
              lg: "30px 0px",
            }}
          >
            {list2.map((d) => (
              <Stack
                width={{
                  xs: "95%",
                  sm: "80%",
                  md: "23%",
                }}
                gap={1}
                p={{
                  xs: "0",
                  sm: "0",
                  md: "0 20px",
                }}
                margin={"0 auto"}
              >
                <Typography fontWeight={"bold"} fontSize={"25px"}>
                  {d.state}
                </Typography>
                <Typography>{d.address}</Typography>
                <Stack direction={"row"} gap={1}>
                  <Typography fontWeight={"bold"}>Phone:</Typography>
                  <Box>
                    <Typography>{d.phone1}</Typography>
                    <Typography>{d.phone2}</Typography>
                  </Box>
                </Stack>
                <Stack direction={"row"} gap={3.7}>
                  <Typography fontWeight={"bold"}>Fax:</Typography>
                  <Box>
                    <Typography>{d.Fax}</Typography>
                  </Box>
                </Stack>
                <hr
                  style={{
                    marginTop: "30px",
                    width: "95%",
                    color: "black",
                    height: "1px",
                  }}
                />
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Offices;
