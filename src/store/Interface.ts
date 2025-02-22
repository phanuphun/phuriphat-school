////////////////////////////////////////////////////////////////////////////////////////////////////
// Client
////////////////////////////////////////////////////////////////////////////////////////////////////

export interface mainPageResponse {
    activity_img : Array<activityImageResonse> 
    anno : Array<annoResponse>
    banner : Array<{banner_img:string , banner_slogan:string , anno_limit:number}>
    news : Array<newsResponse>
}

export interface fileClientResponse {
    category_id : number 
    category_name : string 
    files_list : Array<filesResponse>
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// Common
////////////////////////////////////////////////////////////////////////////////////////////////////
export type msgValidate = 'invalid' | 'valid' | 'no_data'
// data status
export type dataStatus = 'no_data' | 'loading_data' | 'err_data' | 'load_data_succ' | 'network_err'
// view data
export type viewData = 'detail' | 'table'
// admin data 
export interface credential {
    user_id:number
    user_image:string
    user_username:string
    user_firstname:string
    user_lastname:string
    user_email:string
    user_phone:string
    user_address:string
    user_fullname:string
    user_password:string
    user_token:string
    user_login_date:string
    user_rule: userRule
    user_delete: boolean
    user_base_image_path:string
    user_join_date:string
    user_latest_login_date:string

}
////////////////////////////////////////////////////////////////////////////////////////////////////
// person 
////////////////////////////////////////////////////////////////////////////////////////////////////
export interface personCategory {
    pd_category_id  : number,
    pd_category_name : string
}

export interface personPosition {
    pd_position_id : number,
    pd_position_name : string ,
    pd_position_order  : number ,
    pd_category_id   : number 
}

export interface personDirectoryResponse {
    pd_person_id : number,
    pd_person_image : string,
    pd_person_name : string ,
    pd_person_phone : string ,
    pd_person_email : string ,
    pd_person_descript : string ,
    pd_position_name? : string,
    pd_position_id : number ,
    pd_category_name? : string,
    pd_category_id : number ,
}

export interface personDirectoryTableTree {
    position_id : number , 
    position_name : string ,
    persons : Array<personDirectoryResponse>,
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// history logs
////////////////////////////////////////////////////////////////////////////////////////////////////
export type historyType = 'update' | 'add' | 'delete' | 'login' | 'email'
export type historyFunction = 'person_directory' | 'admin' | 'schedule' | 'activity_image' | 
                                'news' | 'file' | 'login' | 'school_setting' | 'annocement' |
                                'teaching_schedule' | 'student_schedule' | 'syllabus' | 'email' | 'teacher'
export interface historyLogsResponse {
    history_logs_id : number ,
    history_logs_username : string,
    history_logs_type : historyType,
    history_logs_fucntion : historyFunction,
    history_logs_text : string ,
    history_logs_date : string ,
}
////////////////////////////////////////////////////////////////////////////////////////////////////
// username 
////////////////////////////////////////////////////////////////////////////////////////////////////

export type userRule = 'admin' | 'user'

export interface adminResponse {
    user_id:number
    user_image:string
    user_username:string
    user_firstname:string
    user_lastname:string
    user_email:string
    user_phone:string
    user_address:string
    user_rule: userRule
    user_delete: boolean
    user_join_date:string
    user_latest_login_date:string
}


////////////////////////////////////////////////////////////////////////////////////////////////////
// file
////////////////////////////////////////////////////////////////////////////////////////////////////
// * .ppt not use now 
type file_type =  'doc' | 'docx' | 'xlsx' | 'xls' | 'csv' | 'pdf' | 'ppt'

export interface fileCategoryRespone {
    file_category_id:number,
    file_category_name:string
}

export interface filesResponse {
    file_id:number,
    file_name_upload:string,
    file_name:string,
    file_pin:boolean,
    file_type:file_type,
    file_size:string,
    file_date:string,
    file_category_id:string
}

export interface imageGalleryType {
    text:string
    url:string
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// news
////////////////////////////////////////////////////////////////////////////////////////////////////
export interface newsCategoryResponse {
    news_category_id:number
    news_category_name:string
}

export interface newsResponse {
    news_id  : number
    news_topic : string 
    news_contents :string 
    news_cover_image :string
    news_category : number // category id 
    news_category_name : string
    news_date : string 
    news_author :string 
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// acticity image
////////////////////////////////////////////////////////////////////////////////////////////////////

export interface activityImageResonse { 
    activity_image_id: number
    activity_image_cover: string 
    activity_image_name: string 
    activity_image_link: string 
    activity_image_date: string 
    activity_image_author: string

}

////////////////////////////////////////////////////////////////////////////////////////////////////
// school data 
////////////////////////////////////////////////////////////////////////////////////////////////////
export interface schoolDataResonse {
    id : number 
    banner_img: string
    banner_img_origin_name : string
    banner_slogan : string
    default_admin_password : string
    anno_limit : number
}

export interface classListResponse {
    class_id : number
    class_name : string
}

export interface teacherListResponse{
    teacher_id : number 
    teacher_name : string
}

export interface yearsListResponse {
    years_id : number 
    years_name : string
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// anno data 
////////////////////////////////////////////////////////////////////////////////////////////////////
export interface annoResponse {
    anno_id : number 
    anno_name : string
    anno_image : string 
    anno_pin : boolean 
    anno_date :string 
    anno_author: string
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// teaching schedule
////////////////////////////////////////////////////////////////////////////////////////////////////
export interface teachingSResponse {
    ts_id:number
    ts_name:string
    ts_img:string
    ts_pin:boolean
    ts_semester:string
    ts_teacher:string
    ts_teacher_name:string
    ts_year_name:string
    ts_years:number
    class_id:number
    class_name:string
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// student schedule
////////////////////////////////////////////////////////////////////////////////////////////////////
export interface StudentSResponse {
    ss_id:number
    ss_name:string
    ss_img:string
    ss_pin:boolean
    ss_semester:string
    ss_teacher:string
    ss_teacher_name:string
    ss_year:number
    ss_year_name:string
    class_id:number
    class_name:string
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// syllabus
////////////////////////////////////////////////////////////////////////////////////////////////////
export interface syllabusResponse{
    syllabus_id:number
    syllabus_name:string
    syllabus_image:string
    class_id:number
    class_name:string
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// email
////////////////////////////////////////////////////////////////////////////////////////////////////
export interface userEmailResponse {
    name :string
    email :string
    image :string | 'no_image_upload'
    from : 'ผู้ใช้งาน' | 'ทำเนียบบุคลากร'
}

export interface emailListResponse {
    email_id : number
    email_topic : string
    email_content : string
    email_to_old : Array<string>
    email_to : Array<{
        email_to_id : number,
        email_to_detail: string 
    }>
    email_date : string
    email_sender : string
}
 