
// eslint-disable-next-line react/prop-types
const ProgressBar = ({ name, length }) => {
    return (
        <div className="mb-5 w-full">
            <div className="font-semibold">{name}</div>
            <div className="h-4 w-full md:w-3/4 bg-[#162950] rounded-lg">
                <div className={`h-4 ${length} bg-gradient-to-r from-[#945DD6] to-[#13ADC7] rounded-full`}></div>
            </div>
        </div>
    );
};

export default ProgressBar;