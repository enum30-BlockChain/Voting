import "../votePage/css/candidateVote.css";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const CandidateVote = ({ index, name, age, account, count, image, setSeleted }) => {
  const handleOnclick = (e) => {
    setSeleted(e.target.value);
  };

  return (
    <>
      <div className="candidateCard-container">
        <Card sx={{ maxWidth: 400, height: 400}}>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="orange" gutterBottom>
              기호 {index+1} 번
            </Typography>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography color="text.secondary" >
              나이 : {age}
            </Typography>
            <Typography variant="body2" className="candidateCard-account">
              {account}
            </Typography>
            <img src={image[index]} alt={name} />
          </CardContent>
          <div className="candidateCard-footer">
            <input
              type="radio"
              name="voted"
              value={index}
              onClick={handleOnclick}
            />
            <div>득표수 : {count}</div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CandidateVote;
