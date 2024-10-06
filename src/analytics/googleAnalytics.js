import ReactGA from "react-ga4";
import {GA_MEASUREMENT_ID} from "../utils/constant"


export const initGA = () => {
  if (!GA_MEASUREMENT_ID){
    console.log("Measurement ID not found");
    return;
  }
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

// Track screen view
export const trackScreenView = (screenName) => {
  ReactGA.send({ hitType: "pageview", page: screenName });
};

// Track click event
export const trackClickEvent = (category, label) => {
  ReactGA.event({
    category: category,
    action: "click",
    label: label,
  });
};
