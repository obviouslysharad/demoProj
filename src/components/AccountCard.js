// import React from "react";
// import { CardGroup, Card, Button } from "react-bootstrap";
// import {useEffect} from "react";
// import {Link} from "react-router-dom"
// import "./AccountCard.css"

// function AccountCard(props) {

//   // useEffect((e)=> {
//   //   console.log('acccount card added')
//   //   console.log(props.jagahe)

//   // },[props.jagahe])

//   const renderList = props.jagahe && props.jagahe.map((jagah) => {
//     return(
//       <CardGroup className = "myCard">
//       <Card>
//         <Card.Img 
        
//           variant="top"
//           src="https://www.investopedia.com/thmb/lqOcGlE7PI6vLMzhn5EDdO0HvYk=/1337x1003/smart/filters:no_upscale()/GettyImages-1054017850-7ef42af7b8044d7a86cfb2bff8641e1d.jpg"
//         />
//         <Card.Body>
//           <Card.Title>{jagah.name}</Card.Title>
//           <Card.Text>The size is {jagah.size}</Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">
//             Last updated 3 mins ago
//           </small>
//         </Card.Footer>
//       </Card>
//     </CardGroup>
//     )

//   }
//   );

//   return(
//     <div>
//       <Link to = {`/personDetails`}>
//       {renderList}
//       </Link>
//       <div>
      
//       </div>
//     </div>
//   )
// };

// export default AccountCard;
