import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const ToolTip = ({ place, msg, children }) => {
    return (
        <Tooltip placement={place} trigger={['hover']}
            overlay={msg} mouseEnterDelay={1}>
            {children}
        </Tooltip>
    )
}

export default ToolTip;
