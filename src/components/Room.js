import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';
import './Room.css'; // Import the CSS file for styling

export default function Room() {
    const { id } = useParams();
    const meetingContainerRef = useRef(null); // Initialize the ref

    useEffect(() => {
        const myMeeting = async () => {
            // Generate Kit Token
            const appID = 1316725679;
            const serverSecret = "01bf93244bae1a98857feebfae511bc5";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,
                serverSecret,
                id,
                Date.now().toString(),
                " "
            );

            // Create instance object from Kit Token.
            const zp = ZegoUIKitPrebuilt.create(kitToken);

            // Start the call using the meetingContainerRef as the container
            zp.joinRoom({
                container: meetingContainerRef.current, // Use the ref here
                sharedLinks: [
                    {
                        name: 'Personal link',
                        url: `https://video-call-app-react-ckzs.vercel.app/${id}`
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall, // 1-on-1 call mode
                },
            });
        };

        myMeeting();
    }, [id]);

    return (
        <div
            className="myCallContainer"
            ref={meetingContainerRef} // Use the ref for the container
            style={{ width: '100vw', height: '100vh' }} // This style can also be moved to CSS
        ></div>
    );
}
