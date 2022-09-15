import styled from 'styled-components';

const FileUploaderWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > label {
        width: 100%;
        max-width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        > div {
            flex-grow: initial;
            > span {
                font-size: 1rem;
            }
        }
    }
`;
export default FileUploaderWrapper;