<?php
namespace App\Filters;

use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;

class Noauth implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        if (session()->get('isLoggedIn')) {

			if (session()->get('role') == 1) {
				return redirect()->to(base_url('admin'));
			}

			if (session()->get('role') == 2) {
				return redirect()->to(base_url('lawyer'));
			}

            if (session()->get('role') == 3) {
				return redirect()->to(base_url('plaintiff'));
			}
        }

    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // Do something here
    }
}