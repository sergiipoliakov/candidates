

import type { ArgsProps } from 'antd/lib/notification';
import { notification } from 'antd';


const Notification = (type: string) => (props: ArgsProps): void => {
    const {
        message,
        description,
        className,
        style,
        duration
    } = props;
    (notification as any)[type]({
        message,
        duration,
        description,
        className,
        style
    });
};

export default Notification;
