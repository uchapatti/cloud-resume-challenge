# tests/test_counter.py
import requests
import os

def test_visitor_counter_api():
    # Get API URL from environment variable or use default
    api_url = os.getenv('API_URL', 'https://your-function-app.azurewebsites.net/api/GetCounter')
    
    try:
        response = requests.get(api_url)
        response.raise_for_status()
        
        data = response.json()
        assert 'count' in data
        assert isinstance(data['count'], int)
        
        print("✅ Visitor counter API test passed")
        return True
    except Exception as e:
        print(f"❌ Visitor counter API test failed: {str(e)}")
        return False

if __name__ == "__main__":
    test_visitor_counter_api()