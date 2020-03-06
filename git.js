class GitHub{
    constructor(){
        this.client_id='a915b45b829535982c5f';
        this.client_secret='793acf256a8bc25775bb1ef3d58234855c62de02';
        this.repos_count=5;
        this.repos_sort='created:asc';
    }
    async getUser(user)
    {
        const profilResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reporesponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile=await profilResponse.json();
        const repos=await reporesponse.json();
        return {
            profile,
            repos
        }
    }

}