import React from 'react';
import { Skeleton } from '@material-ui/lab';

export default function CustomSkeleton(props) {
  return <Skeleton
    animation="wave"
    variant={props.variant}
    width={props.dimensions[0]}
    height={props.dimensions[1]}
    style={{
      marginTop: props.dimensions[2] || 0,
      marginRight: props.dimensions[3] || 0,
      marginBottom: props.dimensions[4] || 0,
      marginLeft: props.dimensions[5] || 0,
    }}/>
}
