import React from "react";
import Button from "@mui/material/Button";

export default function Landing() {
  return (
    <div>
      <h1>What would you like to do?</h1>
      <Button variant="text">Create Quiz</Button>
      <Button variant="text">Saved Quizzes</Button>
    </div>
  );
}
