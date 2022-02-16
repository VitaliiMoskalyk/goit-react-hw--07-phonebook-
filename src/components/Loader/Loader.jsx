import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Grid } from 'react-loader-spinner';

export function Loader() {
  return <Grid heigth="100" width="200" color="grey" ariaLabel="loading" />;
}
