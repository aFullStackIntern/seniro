import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import lo from "../assets/lo.svg";
import Link from "next/link";

import Image from "next/image";

const CaseStudyForm2 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    company: "",
    phone: "",
    email: "",
    industry: "",
    companyIndustry: "",
    crmEdition: "",
    other: "",
  });

  // Update form data state as the user interacts with inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Log form data to the console
    // Add further logic here to submit the data
  };

  return (
    <Stack width={"100%"}>
      <form onSubmit={handleSubmit}>
        <Stack>
          <Stack
            marginTop={"40px"}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image width={"170px"} height={"40px"} src={lo} alt="logo" />
            <Typography
              width={"95%"}
              margin={"0px auto"}
              sx={{
                fontFamily: "Work Sans",
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "26px",
                letterSpacing: "0em",
                textAlign: "center",
                marginTop: "20px",
                opacity: 0.6,
              }}
            >
              Choose the features you or your team use.
            </Typography>
          </Stack>
          <Stack
            width={{
              xs: "95%",
              sm: "90%",
              md: "75%",
            }}
            margin={"0px auto"}
          >
            <hr
              style={{
                width: "100%",
                marginTop: "40px",
                border: "0.5px solid gray",
                backgroundColor: "gray",
              }}
            />

            <Stack gap={2} mt={2}>
              <Typography
                width={"100%"}
                fontWeight={500}
                fontSize={"14px"}
                lineHeight={"24.5px"}
                opacity={0.9}
              >
                What are the customer engagement channels you use?*
              </Typography>
              <Stack
                direction={{
                  xs: "row",
                }}
                justifyContent={"space-between"}
                fontFamily={"Work Sans"}
                gap={2}
              >
                <Stack
                  gap={2}
                  width={{
                    xs: "30%",
                    md: "35%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="email" value="email" />
                    <label for="email">Email</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="salesSignals"
                      value="salesSignals"
                    />
                    <label for="salesSignals">Sales Signals</label>
                  </Stack>
                </Stack>

                <Stack
                  gap={2}
                  width={{
                    xs: "30%",
                    md: "30%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="telephony" value="telephony" />
                    <label for="telephony">Telephony</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="socialMedia"
                      value="socialMedia"
                    />
                    <label for="socialMedia">Social Media</label>
                  </Stack>
                </Stack>

                <Stack
                  gap={2}
                  width={{
                    xs: "30%",
                    md: "20%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="liveChat" value="liveChat" />
                    <label for="liveChat">Live chat</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="portals" value="portals" />
                    <label for="portals">Portals</label>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <hr
              style={{
                width: "100%",
                marginTop: "40px",
                borderTop: "1px dashed gray",
              }}
            />

            <Stack gap={2} mt={2}>
              <Typography
                width={"100%"}
                fontWeight={500}
                fontSize={"14px"}
                lineHeight={"24.5px"}
                opacity={0.9}
              >
                What are the sales force automation features you use?*
              </Typography>
              <Stack
                gap={2}
                direction={{
                  xs: "column",
                  md: "row",
                }}
                justifyContent={"space-between"}
                fontFamily={"Work Sans"}
              >
                <Stack
                  gap={2}
                  width={{
                    xs: "95%",
                    md: "35%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="leadManagement"
                      value="leadManagement"
                    />
                    <label for="leadManagement">Lead Management</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="accountManagement"
                      value="accountManagement"
                    />
                    <label for="accountManagement">Account Management</label>
                  </Stack>
                </Stack>

                <Stack
                  gap={2}
                  width={{
                    xs: "95%",
                    md: "30%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="opportunity"
                      value="opportunity"
                    />
                    <label for="opportunity">Opportunity/Deal Management</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="forecasting"
                      value="forecasting"
                    />
                    <label for="forecasting">Forecasting</label>
                  </Stack>
                </Stack>

                <Stack
                  gap={2}
                  width={{
                    xs: "95%",
                    md: "20%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="contactManagement"
                      value="contactManagement"
                    />
                    <label for="contactManagement">Contact Management</label>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>

            <hr
              style={{
                width: "100%",
                marginTop: "40px",
                borderTop: "1px dashed gray",
              }}
            />
            <Stack gap={2} mt={2}>
              <Typography
                width={"100%"}
                fontWeight={500}
                fontSize={"14px"}
                lineHeight={"24.5px"}
                opacity={0.9}
              >
                What are the automation features you use?*
              </Typography>
              <Stack
                gap={2}
                direction={{
                  xs: "column",
                  md: "row",
                }}
                justifyContent={"space-between"}
                fontFamily={"Work Sans"}
              >
                <Stack
                  gap={2}
                  width={{
                    xs: "95%",
                    md: "35%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="workflows" value="workflows" />
                    <label for="workflows">Workflows</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="macros" value="macros" />
                    <label for="macros">Macros</label>
                  </Stack>
                </Stack>

                <Stack
                  gap={2}
                  width={{
                    xs: "95%",
                    md: "30%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="assignmentRules"
                      value="assignmentRules"
                    />
                    <label for="assignmentRules">Assignment rules</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="others" value="others" />
                    <label for="others">Others (Please specify)</label>
                  </Stack>
                  <input
                    for="others"
                    type="text-area"
                    style={{
                      width: "90%",
                      marginLeft: "10%",
                      height: "40px",
                      border: "1px solid #D3D3D3",
                    }}
                  />
                </Stack>

                <Stack
                  gap={2}
                  width={{
                    xs: "95%",
                    md: "20%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="blueprint" value="blueprint" />
                    <label for="blueprint">Blueprint</label>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>

            <hr
              style={{
                width: "100%",
                marginTop: "40px",
                borderTop: "1px dashed gray",
              }}
            />
            <Stack gap={2} mt={2}>
              <Typography
                width={"100%"}
                fontWeight={500}
                fontSize={"14px"}
                lineHeight={"24.5px"}
                opacity={0.9}
              >
                What are the lead management tools you use?
              </Typography>
              <Stack
                gap={2}
                direction={{
                  xs: "column",
                  md: "row",
                }}
                justifyContent={"space-between"}
                fontFamily={"Work Sans"}
              >
                <Stack
                  gap={2}
                  width={{
                    xs: "95%",
                    md: "35%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="campaignsModule"
                      value="campaignsModule"
                    />
                    <label for="campaignsModule">Campaigns module</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="zhi" value="zhi" />
                    <label for="zhi">Zoho Campaigns integration</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="others" value="others" />
                    <label for="others">Others (Please specify)</label>
                  </Stack>
                  <input
                    for="others"
                    type="text-area"
                    style={{
                      width: "90%",
                      marginLeft: "10%",
                      height: "40px",
                      border: "1px solid #D3D3D3",
                    }}
                  />
                </Stack>

                <Stack
                  gap={2}
                  width={{
                    xs: "95%",
                    md: "30%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="webforms" value="webforms" />
                    <label for="webforms">Webforms</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="socialMedia"
                      value="socialMedia"
                    />
                    <label for="socialMedia">Social Media</label>
                  </Stack>
                </Stack>

                <Stack
                  gap={2}
                  width={{
                    xs: "95%",
                    md: "20%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="googleAds" value="googleAds" />
                    <label for="googleAds">Google Ads</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="csa" value="csa" />
                    <label for="csa">Card Scanner App</label>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <hr
              style={{
                width: "100%",
                marginTop: "40px",
                borderTop: "1px dashed gray",
              }}
            />
            <Stack gap={2} mt={2}>
              <Typography
                width={"100%"}
                fontWeight={500}
                fontSize={"14px"}
                lineHeight={"24.5px"}
                opacity={0.9}
              >
                Do you use any of these sales collaboration features?*
              </Typography>
              <Stack
                gap={2}
                direction={{
                  xs: "column",
                  md: "row",
                }}
                justifyContent={"space-between"}
                fontFamily={"Work Sans"}
              >
                <Stack
                  gap={2}
                  width={{
                    xs: "95%",
                    md: "35%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="calendar" value="calendar" />
                    <label for="calendar">Calendar</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="gamescope" value="gamescope" />
                    <label for="gamescope">Gamescope</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="others" value="others" />
                    <label for="others">Others (Please specify)</label>
                  </Stack>
                  <input
                    for="others"
                    type="text-area"
                    style={{
                      width: "90%",
                      marginLeft: "10%",
                      height: "40px",
                      border: "1px solid #D3D3D3",
                    }}
                  />
                </Stack>

                <Stack
                  gap={2}
                  width={{
                    xs: "95%",
                    md: "30%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="documentsTab"
                      value="documentsTab"
                    />
                    <label for="documentsTab">Documents Tab</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="aota" value="aota" />
                    <label for="aota">All of the above</label>
                  </Stack>
                </Stack>

                <Stack
                  gap={2}
                  width={{
                    xs: "95%",
                    md: "20%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="feeds" value="feeds" />
                    <label for="feeds">Feeds</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="csa" value="csa" />
                    <label for="csa">Card Scanner App</label>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <hr
              style={{
                width: "100%",
                marginTop: "40px",
                borderTop: "1px dashed gray",
              }}
            />
            <Stack gap={2} mt={2}>
              <Typography
                width={"100%"}
                fontWeight={500}
                fontSize={"14px"}
                lineHeight={"24.5px"}
                opacity={0.9}
              >
                What are the customization features you use?*
              </Typography>
              <Stack
                gap={2}
                direction={{
                  xs: "column",
                  md: "row",
                }}
                justifyContent={"space-between"}
                fontFamily={"Work Sans"}
              >
                <Stack
                  gap={2}
                  width={{
                    xs: "95%",
                    md: "35%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="customModules"
                      value="customModules"
                    />
                    <label for="customModules">Custom modules</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="pageLayouts"
                      value="pageLayouts"
                    />
                    <label for="pageLayouts">Page layouts</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="aota" value="aota" />
                    <label for="aota">All of the above</label>
                  </Stack>
                </Stack>

                <Stack
                  gap={2}
                  width={{
                    xs: "95%",
                    md: "30%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="customFields"
                      value="customFields"
                    />
                    <label for="customFields">Custom fields</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="conditionalLayout"
                      value="conditionalLayout"
                    />
                    <label for="conditionalLayout">Conditional layout</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="nofa" value="nofa" />
                    <label for="nofa">None of the above</label>
                  </Stack>
                </Stack>

                <Stack
                  gap={2}
                  width={{
                    xs: "95%",
                    md: "20%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="customButtons"
                      value="customButtons"
                    />
                    <label for="customButtons">Custom buttons</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="canvas" value="canvas" />
                    <label for="canvas">Canvas</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="others" value="others" />
                    <label for="others">Others (Please specify)</label>
                  </Stack>
                  <input
                    for="others"
                    type="text-area"
                    style={{
                      width: "90%",
                      marginLeft: "10%",
                      height: "40px",
                      border: "1px solid #D3D3D3",
                    }}
                  />
                </Stack>
              </Stack>
            </Stack>
            <hr
              style={{
                width: "100%",
                marginTop: "40px",
                borderTop: "1px dashed gray",
              }}
            />
            <Stack gap={2} mt={2}>
              <Typography
                width={"100%"}
                fontWeight={500}
                fontSize={"14px"}
                lineHeight={"24.5px"}
                opacity={0.9}
              >
                What type of CRM reports and dashboards do you use?*
              </Typography>
              <Stack
                gap={2}
                direction={{
                  xs: "column",
                  md: "row",
                }}
                justifyContent={"space-between"}
                fontFamily={"Work Sans"}
              >
                <Stack
                  gap={2}
                  width={{
                    xs: "95%",
                    md: "35%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="StandardReports"
                      value="StandardReports"
                    />
                    <label for="StandardReports">Standard reports</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="standardDashboards"
                      value="standardDashboards"
                    />
                    <label for="standardDashboards">Standard dashboards</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="nota" value="nota" />
                    <label for="nota">None of the above</label>
                  </Stack>
                </Stack>

                <Stack
                  gap={2}
                  width={{
                    xs: "95%",
                    md: "30%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="customReports"
                      value="customReports"
                    />
                    <label for="customReports">Custom reports</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input
                      type="checkbox"
                      id="customDashboards"
                      value="customDashboards"
                    />
                    <label for="customDashboards">Custom dashboards</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="others" value="others" />
                    <label for="others">Others (Please specify)</label>
                  </Stack>
                  <input
                    for="others"
                    type="text-area"
                    style={{
                      width: "90%",
                      marginLeft: "10%",
                      height: "40px",
                      border: "1px solid #D3D3D3",
                    }}
                  />
                </Stack>

                <Stack
                  gap={2}
                  width={{
                    xs: "95%",
                    md: "20%",
                  }}
                  margin={{ xs: "0px auto", md: "0px" }}
                >
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="zar" value="zar" />
                    <label for="zar">Zoho Analytics reports</label>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <input type="checkbox" id="aota" value="aota" />
                    <label for="aota">All of the above</label>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack alignItems={"center"} mb={"40px"}>
              <Link
                href="/CaseStudyForm3"
                onClick={() => window.scrollTo(0, 0)}
                style={{ textDecoration: "none" }}
              >
                <Button
                  type="submit"
                  style={{
                    width: "140px",
                    height: "40px",
                    backgroundColor: "#F15B25",
                    marginTop: "40px",
                    borderRadius: "0px",
                    alignSelf: "center",
                  }}
                >
                  <Typography color={"white"}>NEXT</Typography>
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default CaseStudyForm2;
