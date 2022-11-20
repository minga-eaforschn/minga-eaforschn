import { Card, CardContent, Typography } from "@mui/material";
import { getCostRank } from "./activity-info/cost-rank";
import { Payments } from "@mui/icons-material";
import React from "react";

interface CostCardProps {
  cost: number;
}

const CostCard = (props: CostCardProps) => {
  return (
    <Card
      className={"info-card"}
      sx={{
        display: "flex",
        jutstifyContent: "center",
        alignItems: "center",
        width: "fit-content",
      }}
    >
      {props.cost && (
        <Typography
          sx={{
            marginBottom: "15px",
            marginLeft: "10px",
            whiteSpace: "nowrap;",
          }}
        >
          {props.cost} €
        </Typography>
      )}
      <CardContent className={"info-card-content"}>
        {[...Array(getCostRank(props.cost))].map((e, i) => (
          <Payments key={`cost-${i}`} />
        ))}
        {[...Array(3 - getCostRank(props.cost))].map((e, i) => (
          <Payments color={"disabled"} key={`cost-disabled-${i}`} />
        ))}
      </CardContent>
    </Card>
  );
};

export default CostCard;
