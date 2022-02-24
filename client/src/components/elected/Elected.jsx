import React, {useEffect, useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import VotingMethods from "../../votingContract/votingContract"
const Elected = () => {
  const [winner, setWinner] = useState([]);
  useEffect(() => {
    const excuteGetWinner = async () => {
      const result = await VotingMethods.getWinner();
      setWinner(result);
    }
    excuteGetWinner();
  }, []);

  if (winner.voteCounts === "0" ) {
    return <>
      <h1>돌아가! 아직 투표 안끝났다!!</h1>
    </>
  } else {
    return (
      <>
        <Card sx={{ maxWidth: 400}}>
          <CardContent>
            {/* <Typography sx={{ fontSize: 20 }} color="orange" gutterBottom>
              기호 {index+1} 번
            </Typography> */}
            <Typography variant="h5" component="div">
              {winner.name}
            </Typography>
            <Typography color="text.secondary" >
              나이 : {winner.age}
            </Typography>
            <Typography variant="body2" className="candidateCard-account">
              {winner.account}
            </Typography>
            {/* <img src={image[index]} alt={name} /> */}
            <div>득표수 : {winner.voteCounts}</div>
          </CardContent>

        </Card>
      </>
    );
  }
};

export default Elected;
