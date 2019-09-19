// For main utilities, eg checking screen size, is phone/desktop, general string manipulation etc.
// If this scales, can split into more specific js files (eg 1 for devices, 1 for strings).

export const IsMobile = () => {
    return (window.innerHeight / window.innerWidth) > 1.6;
}