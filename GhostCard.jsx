import React from "react";
import "../css/GhostCard.css";
import "../css/shiningButton.css"
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { AutoAwesome } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { maxHeight } from "@mui/system";
import star from '../assets/images/dasboard/Stars.svg';
export const GhostCard = ({ heading, text, buttonVal, nav, fn,minHeight }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const smallScreen = useMediaQuery("(max-width: 900px)");
  console.log("smallScreensmallScreen", smallScreen);
  const defaultfn = () => {
    navigate(`${nav}`);
    console.log("hhghgghgh", nav);
  };
console.log("hfjdhgdf",fn);
  const handleClick = fn === null || fn === undefined ? defaultfn : fn;

  return (
    <div
      className="GhostCard-firstCard"
      style={isMobileOrTablet ? null : { paddingInline: 44,minHeight:minHeight? minHeight : "100px" }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          width: smallScreen ? "100%" : "70%",
        }}
      >
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',marginTop:'4px'}}>
        {/* <AutoAwesome sx={{ mt: 1 }} className="GhostCard-font" /> */}
        <img src={star} className="GhostCard-font" />
        </div>
        <Stack>
        {heading ?
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "28px",
              color: "#095397",
            }}
          >
            {heading}
          </span>
          :
          <div style={{height:'5px'}}>

          </div> }
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#1f1f1f",
            }}
          >
            {text}
          </span>
        </Stack>
      </Stack>
      <div
        style={{
          width: smallScreen ? "100%" : "30%",
          display: "flex",
          flexDirection: "row",
          justifyContent: smallScreen ? "flex-start" : "flex-end",
          marginLeft: smallScreen ? "86px" : "0px",
        }}
      >
        {buttonVal ? (
          // <div onClick={handleClick} className="GhostCard-reportbutton">
          //    {buttonVal}
          // </div>
            <button class="shining-button"  onClick={handleClick}>
            <span>+</span>
            {buttonVal}
        </button>
        ) : null}
      </div>
    </div>
  );
};
