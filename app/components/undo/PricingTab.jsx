// import React, { useEffect, useState } from "react";
// import { Box, Typography, Stack } from "@mui/material";
// import PriceCardSection from "./PriceCardSection";
// import SaveUpTo from "./SaveUpTo";
// import axios from "axios";

// const PricingTab = () => {
//   const [plan, setPlan] = useState("monthly");
//  const [subscriptionPlans, setSubscriptionPlans] = useState([]);
//   const handlePlan = (selectedPlan) => {
//     setPlan(selectedPlan);
//   };
//   useEffect(() => {
//     const fetchSubscriptionPlans = async () => {
//       try {
//         const response = await axios.get(
//           "http://dev.saniiro.net/api/v1/price-comparison"
//         );
//         // Assuming the API returns the subscription plans array directly
//         setSubscriptionPlans(response.data.Data);
//         // You might need to adjust this depending on the structure of your API response
//       } catch (error) {
//         console.error("Error fetching subscription plans:", error);
//       }
//     };

//     fetchSubscriptionPlans();
//   }, []);

//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Box
//           sx={{
//             zIndex: "1",
//             position: "absolute",
//             translateY: "-25px",
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             {subscriptionPlans.map((d) => (
//               <Stack
//                 sx={{
//                   background: "#34A853",
//                   borderRadius: "8px",
//                   boxShadow: "3px 4px 4.300000190734863px 0px #00000040",
//                 }}
//                 direction="row"
//                 spacing={4}
//                 p={"4px 6px"}
//               >
//                 <Box>
//                   <Typography
//                     sx={{
//                       padding: "13px 42px",
//                       borderRadius: "5px",
//                       background: plan === "monthly" ? "#FFFFFF" : "none",
//                       opacity: plan === "monthly" ? 0.7 : 1,
//                       fontFamily: "Work Sans",
//                       fontSize: "16px",
//                       fontWeight: 600,
//                       lineHeight: "16px",
//                       textAlign: "center",
//                       color: plan == "monthly" ? "#000000" : "#FFFFFF",
//                       cursor: "pointer",
//                     }}
//                     onClick={() => handlePlan(`${d.CategoryName}`)}
//                   >
//                     {d.CategoryName}
//                   </Typography>
//                 </Box>
//               </Stack>
//             ))}
//           </Box>
//         </Box>
//       </Box>

//       <SaveUpTo />

//       <PriceCardSection plan={plan} />
//     </>
//   );
// };

// export default PricingTab;

// import React, { useEffect, useState } from "react";
// import { Box, Typography, Stack } from "@mui/material";
// import PriceCardSection from "./PriceCardSection";
// import SaveUpTo from "./SaveUpTo";
// import axios from "axios";
// import PriceTagSection from "./PracingTagSection";
// import PricingFeaturesTable from "./PricingFeaturesTable"
// const PricingTab = () => {
//   const [plan, setPlan] = useState("monthly");
//   const [subscriptionPlans, setSubscriptionPlans] = useState([]);

//   const handlePlan = (selectedPlan) => {
//     setPlan(selectedPlan);
//   };

//   useEffect(() => {
//     const fetchSubscriptionPlans = async () => {
//       try {
//         const response = await axios.get(
//           "http://dev.saniiro.net/api/v1/price-comparison"
//         );
//         const plans = response.data.Data;
//         setSubscriptionPlans(plans);
//         if (plans.length > 0) {
//           setPlan(plans[0].CategoryName); // Set the initial plan to the first plan
//         }
//         setPlan(plans.Price);
//       } catch (error) {
//         console.error("Error fetching subscription plans:", error);
//       }
//     };

//     fetchSubscriptionPlans();
//   }, []);

//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Box
//           sx={{
//             zIndex: "1",
//             position: "absolute",
//             translateY: "-25px",
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             {subscriptionPlans.map((d) => (
//               <Stack
//                 key={d.CategoryName}
//                 sx={{
//                   background: "#34A853",
//                   borderRadius: "8px",
//                   boxShadow: "3px 4px 4.300000190734863px 0px #00000040",
//                 }}
//                 direction="row"
//                 spacing={4}
//                 p={"4px 6px"}
//               >
//                 <Box>
//                   <Typography
//                     sx={{
//                       padding: "13px 42px",
//                       borderRadius: "5px",
//                       background: plan === d.CategoryName ? "#FFFFFF" : "none",
//                       opacity: plan === d.CategoryName ? 0.7 : 1,
//                       fontFamily: "Work Sans",
//                       fontSize: "16px",
//                       fontWeight: 600,
//                       lineHeight: "16px",
//                       textAlign: "center",
//                       color: plan === d.CategoryName ? "#000000" : "#FFFFFF",
//                       cursor: "pointer",
//                     }}
//                     onClick={() => handlePlan(d.CategoryName)}
//                   >
//                     {d.CategoryName}
//                   </Typography>
//                 </Box>
//               </Stack>
//             ))}
//           </Box>
//         </Box>
//       </Box>

//       <SaveUpTo />

//       <PriceCardSection plan={plan} />
//       <PriceTagSection />
//       <PricingFeaturesTable />
//     </>
//   );
// };

// export default PricingTab;

// import React, { useEffect, useState } from "react";
// import { Box, Typography, Stack } from "@mui/material";
// import PriceCardSection from "./PriceCardSection";
// import SaveUpTo from "./SaveUpTo";

// import axios from "axios";
// import FeatureTable from "./PricingFeaturesTable";
// import TagSection from "./PracingTagSection";

// const PricingTab = () => {
//   const [plan, setPlan] = useState("monthly");
//   const [subscriptionPlans, setSubscriptionPlans] = useState([]);
//   const [selectedPlanDetails, setSelectedPlanDetails] = useState(null);
// const [price, setprice] = useState(null)
//   const handlePlan = (selectedPlan) => {
//     setPlan(selectedPlan);
//     const selectedPlanData = subscriptionPlans.find(
//       (plan) => plan.CategoryName === selectedPlan
//     );
//     setSelectedPlanDetails(selectedPlanData);
//   };

//   useEffect(() => {
//     const fetchSubscriptionPlans = async () => {
//       try {
//         const response = await axios.get(
//           "http://dev.saniiro.net/api/v1/price-comparison"
//         );
//         const plans = response.data.Data;
//         setSubscriptionPlans(plans);
//         if (plans.length > 0) {
//           setPlan(plans[0].CategoryName); // Set the initial plan to the first plan
//           setSelectedPlanDetails(plans[0]); // Set the initial plan details
//         }
//         setprice(plans.price)
//       } catch (error) {
//         console.error("Error fetching subscription plans:", error);
//       }
//     };

//     fetchSubscriptionPlans();
//   }, []);

//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Box
//           sx={{
//             zIndex: "1",
//             position: "absolute",
//             translateY: "-25px",
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             {subscriptionPlans.map((d) => (
//               <Stack
//                 key={d.CategoryName}
//                 sx={{
//                   background: "#34A853",
//                   borderRadius: "8px",
//                   boxShadow: "3px 4px 4.300000190734863px 0px #00000040",
//                 }}
//                 direction="row"
//                 spacing={4}
//                 p={"4px 6px"}
//               >
//                 <Box>
//                   <Typography
//                     sx={{
//                       padding: "13px 42px",
//                       borderRadius: "5px",
//                       background: plan === d.CategoryName ? "#FFFFFF" : "none",
//                       opacity: plan === d.CategoryName ? 0.7 : 1,
//                       fontFamily: "Work Sans",
//                       fontSize: "16px",
//                       fontWeight: 600,
//                       lineHeight: "16px",
//                       textAlign: "center",
//                       color: plan === d.CategoryName ? "#000000" : "#FFFFFF",
//                       cursor: "pointer",
//                     }}
//                     onClick={() => handlePlan(d.CategoryName)}
//                   >
//                     {d.CategoryName}
//                   </Typography>
//                 </Box>
//               </Stack>
//             ))}
//           </Box>
//         </Box>
//       </Box>

//       <SaveUpTo />

//       {selectedPlanDetails && (
//         <PriceCardSection
//           selectedPlanDetails={selectedPlanDetails}
//           price={price}
//         />
//       )}
//       <TagSection />
//       <FeatureTable />
//     </>
//   );
// };

// export default PricingTab;

import React, { useEffect, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import PriceCardSection from "./PriceCardSection";
import SaveUpTo from "./SaveUpTo";
import axios from "axios";
import FeatureTable from "./PricingFeaturesTable";
import TagSection from "./PracingTagSection";

const PricingTab = () => {
  const [plan, setPlan] = useState("Monthly");
  const [subscriptionPlans, setSubscriptionPlans] = useState([]);
  const [selectedPlanDetails, setSelectedPlanDetails] = useState(null);

  const handlePlan = (selectedPlan) => {
    setPlan(selectedPlan);
    const selectedPlanData = subscriptionPlans.find(
      (plan) => plan.CategoryName === selectedPlan
    );
    setSelectedPlanDetails(selectedPlanData);
  };

  useEffect(() => {
    const fetchSubscriptionPlans = async () => {
      try {
        const response = await axios.get(
          "http://dev.saniiro.net/api/v1/price-comparison"
        );
        const plans = response.data.Data;
        setSubscriptionPlans(plans);
        if (plans.length > 0) {
          setPlan(plans[0].CategoryName); // Set the initial plan to the first plan
          setSelectedPlanDetails(plans[0]); // Set the initial plan details
        }
      } catch (error) {
        console.error("Error fetching subscription plans:", error);
      }
    };

    fetchSubscriptionPlans();
  }, []);
  console.log("subscriptionPlans", subscriptionPlans);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            zIndex: "1",
            position: "absolute",
            translateY: "-25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {subscriptionPlans.map((d) => (
              <Stack
                key={d.CategoryName}
                sx={{
                  background: "#34A853",
                  borderRadius: "8px",
                  boxShadow: "3px 4px 4.300000190734863px 0px #00000040",
                }}
                direction="row"
                spacing={4}
                p={"4px 6px"}
              >
                <Box>
                  <Typography
                    sx={{
                      padding: "13px 42px",
                      borderRadius: "5px",
                      background: plan === d.CategoryName ? "#FFFFFF" : "none",
                      opacity: plan === d.CategoryName ? 0.7 : 1,
                      fontFamily: "Work Sans",
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "16px",
                      textAlign: "center",
                      color: plan === d.CategoryName ? "#000000" : "#FFFFFF",
                      cursor: "pointer",
                    }}
                    onClick={() => handlePlan(d.CategoryName)}
                  >
                    {d.CategoryName}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Box>
        </Box>
      </Box>

      <SaveUpTo />

      {selectedPlanDetails && (
        <PriceCardSection selectedPlanDetails={selectedPlanDetails} />
      )}
      <TagSection />
      {selectedPlanDetails && (
        <FeatureTable features={selectedPlanDetails.Compare} />
      )}
    </>
  );
};

export default PricingTab;
