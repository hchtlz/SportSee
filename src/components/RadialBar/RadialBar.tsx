import { getUserInfos } from '../../service/api/data';



/* TODO : IMPLENTER LE CODE POUR AVOIR LE RADIALBAR */
getUserInfos('12')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

getUserInfos('18')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

export default function RadialBar() {
  return (
    <div>
      <h1>RadialBar</h1>
    </div>
  );
}
