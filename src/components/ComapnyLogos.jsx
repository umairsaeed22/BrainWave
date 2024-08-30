import { companyLogos } from "../constants"

const ComapnyLogos = ({ className }) => {
    return (
        <div className={className}>
            <h5 className='tagline mb-6 text-center text-1/50'>Helping people create beautiful content at</h5>
            <ul className="flex">
            {companyLogos.map((logo, index) => (
                <li 
                key={index}
                className="flex justify-center flex-1 h-[8.5rem]">
                    <img
                        src={logo}
                        alt="logo"
                        width={138}
                        height={28}
                    />
                </li>
            ))}
            </ul>
        </div>
    )
}

export default ComapnyLogos