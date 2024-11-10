import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = {
  title: string;
  className?: string; // Make className optional
} & TouchableOpacityProps;

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ title, className, ...touchableProps }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...touchableProps}
        className={`${styles.button} ${className || ''}`} // Merge classNames
      >
        <Text className={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = {
  button: 'items-center bg-indigo-500 rounded-[28px] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
};
