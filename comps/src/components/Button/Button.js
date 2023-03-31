import className from "classnames";

function Button({
    outline,
    rounded,
    primary,
    secondary,
    danger,
    success,
    warning,
    children,
    ...rest 
}) {

    const classes = className(rest.className, 'flex item-center px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-500': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-500': outline && warning,
        'text-red-500': outline && danger,
    });

    return <button {...rest} className={classes}>{children}</button>
}

export default Button

// Button.propTypes = {

//     checkVariationValue: ({
//         primary,
//         secondary,
//         danger,
//         success,
//         warning }) => {
//         let count = Number(!!primary) + Number(!!secondary) + Number(!!danger) + Number(!!success) + Number(!!warning);
//         if (count > 1) {
//             return new Error('More than one=true')
//         }
//     },

//     outline: PropTypes.bool,
//     rounded: PropTypes.bool
// }

