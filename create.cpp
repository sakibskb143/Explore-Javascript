/*Created by sakib */
#include <bits/stdc++.h>
using namespace std;
                               

  #define ll long long
  #define pii pair<int, int>
  #define pll pair<long long, long long>
  #define vi vector<int>
  #define vll vector<long long>
  #define mii map<int, int>
  #define si set<int>
  #define sc set<char>


  #define f(i,s,e) for(long long int i=s;i<e;i++)
  #define cf(i,s,e) for(long long int i=s;i<=e;i++)
  #define rf(i,e,s) for(long long int i=e-1;i>=s;i--)
  #define pb push_back
  #define eb emplace_back


  #define MOD 1000000007


int main()
 {
        ll t;
        cin >> t;
        while(t--){
            ll a , b, c , d;
               cin >> a >> b >> c >> d ;
               ll x = a*d ;
               ll y = b*c ;
               if(x==y) cout << 0 << endl;
               else if((y != 0 and x%y == 0) || x != 0 and y%x == 0)
               {
                cout << 1 << endl;
               }
               else cout << 2 << endl;
