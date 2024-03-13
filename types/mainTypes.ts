interface buttonProps {
    content: string
    onClick: any
}

interface excuseProps {
    http_code: string
    tag: string
    message: string
    
}

interface formProps {
    excuse: any, 
    setExcuse: any, 
    submitting: any, 
    handleSubmit: any,
    register: any,
    errors: any
}

interface DBProps {
    params: any
}