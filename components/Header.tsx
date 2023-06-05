"use client";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
export default function Header() {
	return (
		<header>
			<div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
				<h1 className="text-5xl font-bold">Logo</h1>

				<div className="flex items-center space-x-5 flex-1 justify-end w-full">
					<form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
						<MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
						<input
							type="text"
							placeholder="Search"
							className="flex-1 outline-none p-2"
						/>
						<button type="submit" hidden>
							Search
						</button>
					</form>

					<Avatar name="Andre Nakashima" round size="50" color="#0055d1" />
				</div>
			</div>

			<div className="flex items-center justify-center px-5 md:py-5">
				<p className="flex items-center text-sm font-light p-5 pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055d1]">
					<UserCircleIcon className="inline-block h-10 w-10 text-[#0055d1] mr-1" />
					GPT resumo do dia...
				</p>
			</div>
		</header>
	);
}
