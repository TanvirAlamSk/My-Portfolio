function Contract() {
    // const [show, setShow] = useState(false);
    // const MenuHandler = () => {
    // }
    // bg-gradient-to-b from-purple-600 to-indigo-700
    return (
        <div className="py-8 w-full font-sans">
            <div className="w-full flex items-center justify-center my-12 ">
                <div className="text-white shadow rounded py-12 lg:px-28 px-8 border-2 border-indigo-700 ">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center ">Let’s chat and get a quote!</p>
                    <div className="md:flex items-center mt-12">
                        <div className="md:w-72 flex flex-col">
                            <label className=" font-semibold leading-none">Name</label>
                            <input tabIndex={0} type="name" className="leading-none p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="font-semibold leading-none">Email Address</label>
                            <input tabIndex={0} type="name" className="leading-none p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="font-semibold leading-none">Message</label>
                            <textarea tabIndex={0} aria-label="leave a message" role="textbox" type="name" className="h-36 leading-none p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <button className="btn btn-md mt-9 w-full border-none rounded-none  font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-white">Send  Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
//border-2 border-[#7127BA] bg-clip-text text-fill-transparent bg-gradient-to-r from-blue-500 to-purple-600
export default Contract;
