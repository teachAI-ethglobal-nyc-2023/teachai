import { IDKitWidget } from '@worldcoin/idkit'
import { env } from 'process';
import React from 'react';

import { Button } from "@/components/ui/button"

export function WorldCoinConnect() {

  const [isVerified, setIsVerified] = React.useState(false);

  const onSuccess = (data: any) => {
    console.log('onSuccess', data);
    setIsVerified(true);
  }

  const handleVerify = (data: any) => {
    console.log('handleVerify', data);
  }

  return (
    <div className="m-10">

      {isVerified && (
        <h2>User is World ID Verified</h2>
      )
      }
      {!isVerified && (
        <IDKitWidget
          app_id={process.env.NEXT_PUBLIC_WORLDCOIN_APP_ID || ""} // obtained from the Developer Portal
          onSuccess={onSuccess} // callback when the modal is closed
          handleVerify={handleVerify} // optional callback when the proof is received
          credential_types={['orb', 'phone']} // optional, defaults to ['orb']
          enableTelemetry // optional, defaults to false
        >
          {({ open }) => <Button onClick={open} className="px-6 py-2" >Verify with World ID</Button>}
        </IDKitWidget>
      )
      }

    </div>
  );
}