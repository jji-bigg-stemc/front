import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export const avatars = (participants) =>
  participants.map(([image, name]) => (
    <Tooltip key={name} title={name} placeholder="bottom">
      <SoftAvatar
        src={image}
        alt="name"
        size="xs"
        sx={{
          border: ({ borders: { borderWidth }, palette: { white } }) =>
            `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",

          "&:not(:first-of-type)": {
            ml: -1.25,
          },

          "&:hover, &:focus": {
            zIndex: "10",
          },
        }}
      />
    </Tooltip>
  ));

export default [
  {
    "task initiator": [logoXD, "Soft UI XD Version"],
    participants: (
      <SoftBox display="flex" py={1}>
        {avatars([
          [team1, "Ryan Tompson"],
          [team2, "Romina Hadid"],
          [team3, "Alexander Smith"],
          [team4, "Jessica Doe"],
        ])}
      </SoftBox>
    ),
    "time estimate": (
      <SoftTypography variant="caption" color="text" fontWeight="medium">
        $14,000
      </SoftTypography>
    ),
    urgency: (
      <SoftBox width="8rem" textAlign="left">
        <SoftProgress
          value={60}
          color="info"
          variant="gradient"
          label={false}
        />
      </SoftBox>
    ),
  },
  {
    "task initiator": [logoAtlassian, "Add Progress Track"],
    participants: (
      <SoftBox display="flex" py={1}>
        {avatars([
          [team2, "Romina Hadid"],
          [team4, "Jessica Doe"],
        ])}
      </SoftBox>
    ),
    "time estimate": (
      <SoftTypography variant="caption" color="text" fontWeight="medium">
        $3,000
      </SoftTypography>
    ),
    urgency: (
      <SoftBox width="8rem" textAlign="left">
        <SoftProgress
          value={10}
          color="info"
          variant="gradient"
          label={false}
        />
      </SoftBox>
    ),
  },
  {
    "task initiator": [logoSlack, "Fix Platform Errors"],
    participants: (
      <SoftBox display="flex" py={1}>
        {avatars([
          [team1, "Ryan Tompson"],
          [team3, "Alexander Smith"],
        ])}
      </SoftBox>
    ),
    "time estimate": (
      <SoftTypography variant="caption" color="text" fontWeight="medium">
        Not set
      </SoftTypography>
    ),
    urgency: (
      <SoftBox width="8rem" textAlign="left">
        <SoftProgress
          value={100}
          color="success"
          variant="gradient"
          label={false}
        />
      </SoftBox>
    ),
  },
  {
    "task initiator": [logoSpotify, "Launch our Mobile App"],
    participants: (
      <SoftBox display="flex" py={1}>
        {avatars([
          [team4, "Jessica Doe"],
          [team3, "Alexander Smith"],
          [team2, "Romina Hadid"],
          [team1, "Ryan Tompson"],
        ])}
      </SoftBox>
    ),
    "time estimate": (
      <SoftTypography variant="caption" color="text" fontWeight="medium">
        $20,500
      </SoftTypography>
    ),
    urgency: (
      <SoftBox width="8rem" textAlign="left">
        <SoftProgress
          value={100}
          color="success"
          variant="gradient"
          label={false}
        />
      </SoftBox>
    ),
  },
  {
    "task initiator": [logoJira, "Add the New Pricing Page"],
    participants: (
      <SoftBox display="flex" py={1}>
        {avatars([[team4, "Jessica Doe"]])}
      </SoftBox>
    ),
    "time estimate": (
      <SoftTypography variant="caption" color="text" fontWeight="medium">
        $500
      </SoftTypography>
    ),
    urgency: (
      <SoftBox width="8rem" textAlign="left">
        <SoftProgress
          value={25}
          color="info"
          variant="gradient"
          label={false}
        />
      </SoftBox>
    ),
  },
  {
    "task initiator": [logoInvesion, "Redesign New Online Shop"],
    participants: (
      <SoftBox display="flex" py={1}>
        {avatars([
          [team1, "Ryan Tompson"],
          [team4, "Jessica Doe"],
        ])}
      </SoftBox>
    ),
    "time estimate": (
      <SoftTypography variant="caption" color="text" fontWeight="medium">
        $2,000
      </SoftTypography>
    ),
    urgency: (
      <SoftBox width="8rem" textAlign="left">
        <SoftProgress
          value={40}
          color="info"
          variant="gradient"
          label={false}
        />
      </SoftBox>
    ),
  },
];
