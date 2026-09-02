import uvicorn
from pathlib import Path

if __name__ == "__main__":
    print("================================================================")
    print("   [+] REEVANAX FASTAPI PRODUCTION BACKEND & STUDIO SERVER      ")
    print("================================================================")
    print("  * Website Live URL:    http://127.0.0.1:8080/")
    print("  * Blogs Grid URL:      http://127.0.0.1:8080/blogs/")
    print("  * Content Studio CMS:  http://127.0.0.1:8080/admin/")
    print("  * Swagger OpenAPI Docs: http://127.0.0.1:8080/docs")
    print("================================================================\n")
    
    uvicorn.run("backend.app:app", host="127.0.0.1", port=8080, reload=True)
