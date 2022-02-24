import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CandidateCard = ({index, name, age, account, image}) => {
  return (
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
			</Card>
		</div>
	);
}

export default CandidateCard