interface buttonProps {
    content: string
    onClick: () => void
}

interface excuseProps {
    http_code: string
    tag: string
    message: string
    
}

interface formProps {
    excuse: excuseProps, 
    setExcuse: any, 
    submitting: boolean, 
    handleSubmit: any,
    register: any,
    errors: any
}

interface DBProps {
    params: any
}

interface mainProps {
    handleClick: () => void
}