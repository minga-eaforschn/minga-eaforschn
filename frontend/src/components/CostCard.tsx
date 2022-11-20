import { Card, CardContent } from "@mui/material";
import { getCostRank } from "./activity-info/cost-rank";
import { Payments } from "@mui/icons-material";
import React from "react";

interface CostCardProps {
  cost: number;
}

const CostCard = (props: CostCardProps) => {
  return (
    <Card className={"info-card"}>
      <CardContent className={"info-card-content"}>
        {[...Array(getCostRank(props.cost))].map((e, i) => (
          <Payments />
        ))}
        {[...Array(3 - getCostRank(props.cost))].map((e, i) => (
          <Payments color={"disabled"} />
        ))}
      </CardContent>
    </Card>
  );
};

export default CostCard;
