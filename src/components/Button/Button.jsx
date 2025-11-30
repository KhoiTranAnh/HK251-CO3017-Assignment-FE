import React from 'react';

// A simple utility to conditionally join Tailwind class strings
const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

export const Button = ({
    label,
    variant,
    hasBackground,
    iconSource,
    iconPlacement = 'left', // Default icon position
    fullWidth,
    onClick,
    onClickArgs,
    disabled
}) => {
    // 1. Base Styles: Common styles for all buttons (padding, border, font)
    const baseClasses = classNames(
        // Flex layout for aligning content and icon
        'flex items-center justify-center',

        // Height and Padding (40px height)
        'h-10', // Tailwind's h-10 is 2.5rem, which is 40px
        'px-4 py-2',

        // Typography and Structure
        'font-medium text-sm',
        'rounded-lg transition-colors duration-200',
        'border border-transparent'
    );

    // 2. Variant and Color Styles
    let colorClasses = '';

    // Default Background if hasBackground is true, or check for primary/default variant
    const defaultBgColor = 'bg-[#3B82F6] text-white hover:bg-blue-700';

    // Determine the color scheme based on props
    if (disabled) {
        // Disabled State: Gray background, subtle text, no interaction effects
        colorClasses = 'bg-gray-300 text-gray-500 cursor-not-allowed';
    } else if (hasBackground || !variant || variant === 'primary') {
        // Default (or Primary) with Background: Blue theme
        colorClasses = defaultBgColor;
    } else if (variant === 'secondary') {
        // Secondary Variant: White background with a colored border/text
        colorClasses = 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50';
    } else if (variant === 'ghost') {
        // Ghost Variant: Transparent background, colored text
        colorClasses = 'bg-transparent text-blue-600 hover:bg-blue-50';
    }
    // You can add more variants like 'danger', 'warning', etc. here.

    // 3. Layout Styles (fullWidth and Icon spacing)
    const layoutClasses = classNames(
        // Full Width toggle
        fullWidth ? 'w-full' : 'w-auto',

        // Icon spacing
        iconSource && label && (iconPlacement === 'left' ? 'space-x-2' : 'space-x-reverse space-x-2')
    );

    // 4. Combine all classes
    const finalClasses = classNames(baseClasses, colorClasses, layoutClasses);

    // 5. Click Handler
    const handleClick = () => {
        if (!disabled && onClick) {
            onClick(onClickArgs);
        }
    };

    // 6. Icon Rendering
    // For icon placement, we reverse the flex order if iconPlacement is 'right'
    const Icon = iconSource ? <img src={iconSource} alt="Button Icon" className="w-4 h-4" /> : null;

    // Determine the order of content based on iconPlacement
    const contentOrder = iconPlacement === 'right' ? (
        <>
            {label}
            {Icon}
        </>
    ) : (
        <>
            {Icon}
            {label}
        </>
    );

    return (
        <button
            className={finalClasses}
            onClick={handleClick}
            disabled={disabled}
            // Set the HTML type for better accessibility/form handling
            type="button"
        >
            {contentOrder}
        </button>
    );
};