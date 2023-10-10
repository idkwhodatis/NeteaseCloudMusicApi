// status

module.exports=(query,request)=>{
    const successResponse={
            status:200,
            body:{
                code:200,
                msg:'OK',
                details:{
                    status:true,
                    nodever:'version',
                    apiver:'version'
                }
            },
            cookie:[]
        };

        const errorResponse={
            status:502,
            body:{
                code:502,
                msg:'An error message if there was an actual error.'
            },
            cookie:[]
        };

        try{
            successResponse.body.details.nodever="Node.js "+process.versions.node;
            successResponse.body.details.apiver="NeteaseCloudMusicApi v4.13.2";
            return successResponse;

        }catch(error){
            console.error('Error fetching versions:', error);
            errorResponse.body.msg=error.message;
            return errorResponse;
        }
}
