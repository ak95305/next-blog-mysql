import DbConnection from "@/db/db";

class PostsModel extends DbConnection{
    async getPosts(){
        const sql = "SELECT * FROM posts";
        this.conn.query(sql, function(err, result){
            // if(err) return err;
            console.log(result);
            // return result;
        })
    }
}

export default PostsModel;