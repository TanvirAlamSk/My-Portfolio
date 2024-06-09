const ContactMe = () => {
    return (
        <div className="common-style mt-24">
            <h2 className="text-4xl font-semibold mt-10 mb-4 text-center bg-clip-text text-fill-transparent  bg-gradient-to-r from-[#3BF686] to-[#4CA9FF]">Get in Touch</h2>
            <div>
                <div className="min-h-screen bg-base-200">
                    <div className="flex-col lg:flex-row-reverse ">
                        <div className="md:w-1/2 mx-auto shadow-2xl bg-base-100">
                            <form className="w-full md:w-2/3 mx-auto">
                                <div className="form-control mb-2 w-full">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <br></br>
                                    <input type="name" placeholder="Your Name" className="input input-bordered w-full h-10 rounded bg-none ps-2" required />
                                </div>
                                <div className="form-control mb-2">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <br></br>
                                    <input type="email" placeholder="Your Email" className="input input-bordered w-full h-10 rounded bg-none ps-2" required />
                                </div>
                                <div className="form-control mb-2">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <br></br>
                                    <input type="text" placeholder="Subject" className="input input-bordered w-full mx-auto h-10 rounded bg-none ps-2" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <br></br>
                                    <textarea type="password" placeholder="Message" className=" w-full h-32 rounded bg-none ps-2 pt-2" required />
                                </div>
                                <div className="form-control mt-6 text-center">
                                    <button className='px-8 py-2 rounded-3xl font-semibold bg-gradient-to-r from-[#13ADC7] to-[#945DD6]'>Send  Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;