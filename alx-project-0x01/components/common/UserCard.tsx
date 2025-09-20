import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
    id,
    name,
    username,
    email,
    address,
    phone,
    website,
    company
}) => {
    return (
        <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Header with name and username */}
            <div className="mb-4 border-b border-gray-200 pb-3">
                <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
                <p className="text-blue-600 font-medium">@{username}</p>
            </div>

            {/* Contact Information */}
            <div className="mb-4">
                <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 w-16">Email:</span>
                    <a href={`mailto:${email}`} className="text-blue-600 hover:underline text-sm">
                        {email}
                    </a>
                </div>
                <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 w-16">Phone:</span>
                    <span className="text-gray-600 text-sm">{phone}</span>
                </div>
                <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 w-16">Website:</span>
                    <a
                        href={`https://${website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                    >
                        {website}
                    </a>
                </div>
            </div>

            {/* Address Section */}
            <div className="mb-4 p-3 bg-gray-50 rounded-md">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Address</h3>
                <p className="text-sm text-gray-600">
                    {address.suite}, {address.street}
                </p>
                <p className="text-sm text-gray-600">
                    {address.city}, {address.zipcode}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                    Coordinates: {address.geo.lat}, {address.geo.lng}
                </p>
            </div>

            {/* Company Information */}
            <div className="mb-4 p-3 bg-blue-50 rounded-md">
                <h3 className="text-sm font-semibold text-blue-800 mb-2">Company</h3>
                <p className="text-sm font-medium text-blue-700">{company.name}</p>
                <p className="text-sm text-blue-600 italic">"{company.catchPhrase}"</p>
                <p className="text-xs text-blue-500 mt-1">{company.bs}</p>
            </div>

            {/* Footer with user ID */}
            <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
                <span>User ID: {id}</span>
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs">Active</span>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
