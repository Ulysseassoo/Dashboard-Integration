import React from "react";

const UserCard = (props) => {

	return(
		<div className="flex p-4 w-fit min-w-400px border-b-2 border-t-stone-600">
			<div className="mr-2 rounded-full overflow-hidden w-8 h-8" >
				<img className="w-full h-full object-contain" src={props.userImage} alt="" />
			</div>

			<div className="w-full">
				<div className="flex justify-between items-center mb-2">
					<p>{props.name}</p>
					<p className="text-[12px] text-stone-400">{props.date}</p>
				</div>
				<div className="flex justify-between align-center">
					<p className="text-stone-400">{props.lastMessage} </p>
					{props.notif &&
						<div className="w-6 h-6 rounded-md flex justify-center items-center bg-blue-500 text-slate-100">
							<p className="text-xs">1</p>
						</div>
					}
					{props.noRead && <p>{props.noRead}</p>}
					{props.success && <img src="./Assets/Images/success.svg"></img>}
					{props.error && <img src="./Assets/Images/error.svg"></img>}
					{props.pending && <img src="./Assets/Images/pending.svg"></img>}
				</div>
			</div>
		</div>
	);
}

export default UserCard;
