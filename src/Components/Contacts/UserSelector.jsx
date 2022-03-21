import React from "react";
import image from "../../Assets/Images/Lindsey.png";

function UserSelector() {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex items-center w-2/6">
                <input
                    type="checkbox"
                    name="user"
                    className="mr-4 border-2 border-blue-400"
                />
                <div className="flex items-center">
                    <div className="w-7 mr-2 rounded-full overflow-hidden">
                        <img
                            className="w-full object-contain"
                            src={image}
                            alt=""
                        />
                    </div>
                    <p>Lindsey Stroud</p>
                </div>
            </div>
            <div className="flex items-center justify-between w-4/6 text-gray-700">
                <p>email</p>
                <p>marque</p>
                <p>role</p>
                <p>pourcentage</p>
                <p>connection</p>
            </div>
        </div>
    );
}

export default UserSelector;
